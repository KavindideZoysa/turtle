document.addEventListener("DOMContentLoaded", function() {
    const fullNameInput = document.getElementById("fullName");
    const mobileNumberInput = document.getElementById("mobileNumber");
    const emailInput = document.getElementById("email");
    const confirmEmailInput = document.getElementById("confirmEmail");
    const genderSelect = document.getElementById("gender");
    const storePersonalDetailsButton = document.getElementById("storePersonalDetails");

    storePersonalDetailsButton.addEventListener("click", function() {
        const fullName = fullNameInput.value;
        const mobileNumber = mobileNumberInput.value;
        const email = emailInput.value;
        const confirmEmail = confirmEmailInput.value;
        const gender = genderSelect.value;

        if (!fullName || !mobileNumber || !email || !confirmEmail && !gender) {
            alert("Please enter all your personal details.");
            return;
        }

        localStorage.setItem("fullName", fullName);
        localStorage.setItem("mobileNumber", mobileNumber);
        localStorage.setItem("email", email);
        localStorage.setItem("gender", gender);

        console.log("Full Name:", fullName);
        console.log("Mobile Number:", mobileNumber);
        console.log("Email:", email);
        console.log("Gender:", gender);
    });
});
