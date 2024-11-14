document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting normally

    // Get email and password from form
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Clear any previous error message
    document.getElementById("error-message").innerText = '';

    // Simulate successful login (redirect to a URL after "login")
    if (email && password) {  // Basic check to ensure fields are not empty
        alert("Login Successful!");

        // Redirect to the specified page
        window.location.href = "https://ffsupport.garena.com/hc/en-us/articles/4412928344346-Redemption-Codes";
    } else {
        document.getElementById("error-message").innerText = "Error: Please enter valid credentials.";
    }
});
