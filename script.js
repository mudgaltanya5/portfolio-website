function sendMail() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMessage = document.getElementById("successMessage");

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";
    successMessage.innerHTML = "";

    let isValid = true;

    if (name === "") {
        nameError.innerHTML = "Please enter your name.";
        isValid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.innerHTML = "Please enter your email.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.innerHTML = "Please enter a valid email address.";
        isValid = false;
    }

    if (message === "") {
        messageError.innerHTML = "Please enter your message.";
        isValid = false;
    } else if (message.length < 10) {
        messageError.innerHTML = "Message must be at least 10 characters.";
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    successMessage.innerHTML = "Form validated successfully!";

    let subject = "Portfolio Contact";
    let body =
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage: " + message;

    let mailtoLink =
        "https://mail.google.com/mail/?view=cm&fs=1&to=mudgaltanya5@gmail.com" +
        "&su=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    window.open(mailtoLink, "_blank");
}