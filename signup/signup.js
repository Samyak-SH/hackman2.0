// Import the functions you need from the SDKs you need
// const { initializeApp } = require("firebase/app");
// const { firebaseConfig } = require("./firebaseconfig");

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

firstName = document.getElementById("firstName");
lastName = document.getElementById("lastName");
email = document.getElementById("email");
psw = document.getElementById("psw");
submit = document.getElementById("send");

submit.onclick = (event) => {
  event.preventDefault();
  formValidation();
};
function formValidation() {
  if (passid_validation(psw, 8, 15)) {
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(email.value);
    console.log(psw.value);
  }
}
function passid_validation(psw, mx, my) {
  var psw_len = psw.value.length;
  if (psw_len == 0 || psw_len >= my || psw_len < mx) {
    alert(
      "Password should not be empty / length be between " + mx + " to " + my
    );
    psw.focus();
    return false;
  }
  return true;
}
function checkpass(psw1, psw2) {}
