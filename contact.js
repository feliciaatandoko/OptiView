document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        account_id: null, 
        purpose: document.querySelector('input[name="contactReason"]:checked').value,
        firstname: document.getElementById('firstName').value,
        lastname: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(data.message);
            document.getElementById('contactForm').reset();
        }
    })
    .catch(error => console.error('Error submitting contact form:', error));
});

// function validateForm() {
//     let firstName = document.getElementById("firstName");
//     let lastName = document.getElementById("lastName");
//     let email = document.getElementById("email");
//     let phone = document.getElementById("phone");
//     let message = document.getElementById("message");
//     let consent = document.getElementById("consent");
//     let contactReasonQuestion = document.getElementById("question");
//     let contactReasonComplain = document.getElementById("complain");
//     let contactReasonCompliment = document.getElementById("compliment");

//     if (!contactReasonQuestion.checked && !contactReasonComplain.checked && !contactReasonCompliment.checked) {
//         alert("Please select a reason for contacting us.");
//         return false;
//     }

//     if (firstName.value.trim() === "" || lastName.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
//         alert("All fields must be filled.");
//         return false;
//     }

//     if (firstName.value.trim().length < 2) {
//         alert("First name is too short.");
//         return false;
//     }

//     if (!email.value.endsWith("@gmail.com")) {
//         alert("Email must end with @gmail.com.");
//         return false;
//     }

//     if (!consent.checked) {
//         alert("You must agree to the terms first.");
//         return false;
//     }

//     alert("Your message has been sent successfully!");
//     return true;
// }
