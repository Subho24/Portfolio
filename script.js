let emailElement = document.querySelector("#email");
let messageElement = document.querySelector("#message");
let submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", function(e) {
    e.preventDefault();

    let emailValue = emailElement.value;
    let messageValue = messageElement.value;

    if (emailValue.includes("@")) {
        // all good 
        alert("Thankyou for your message!!");
    } else {
        alert ("Invalid Email. Please try again.");
    }


})