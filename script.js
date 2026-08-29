function sendMail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields");
        return;
    }

    let gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=mudgaltanya5@gmail.com
    &su=${encodeURIComponent("Portfolio Contact from " + name)}
    &body=${encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nMessage: " + message
    )}`;

    window.open(gmailLink, "_blank");
}