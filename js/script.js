const pass = document.querySelector("#form-password");
const pass2 = document.querySelector("#form-password2");
const passMessage = document.querySelector(".passcheck");

function validPasswords() {
  return (pass.value === pass2.value) && (pass.value.length > 0
    || pass2.value.length > 0);
}

function validatePassword(event) {
  console.log("validating from", event)
  if (validPasswords()) {
    passMessage.textContent = "";
  } else {
    passMessage.textContent = "* Passwords do not match";
  }
}

pass.addEventListener("keyup", validatePassword);
pass.addEventListener("focusout", validatePassword);
pass2.addEventListener("keyup", validatePassword);
pass2.addEventListener("focusout", validatePassword);