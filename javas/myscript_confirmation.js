const fullName = localStorage.getItem("fullName");
const mobileNumber = localStorage.getItem("mobileNumber");
const email = localStorage.getItem("email");
const gender = localStorage.getItem("gender");
const NumOfHours =  localStorage.getItem("numOfHours");

// Update the HTML elements with the retrieved values
document.getElementById("C_name").textContent = fullName;
document.getElementById("C_mobile").textContent = mobileNumber;
document.getElementById("C_email").textContent = email;
document.getElementById("C_gender").textContent = gender;
document.getElementById("C_duration").textContent = NumOfHours;
document.getElementById("C_gender").textContent = gender;