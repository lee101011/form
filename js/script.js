const pass = document.querySelector("#form-password");
const pass2 = document.querySelector("#form-password2");
const passMessage = document.querySelector(".passcheck");

function validPasswords() {
  return pass.value === pass2.value && pass.value.length > 0;
}

pass2.addEventListener("change",(event) => {
  if(validPasswords()) {
    passMessage.textContent = "";
  } else {
    passMessage.textContent = "* Passwords do not match";
  }
});