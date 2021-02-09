const form = document.querySelector(".form");
const error = document.querySelector(".error-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form["email"];
  const emailValue = email.value;
  if (!emailValue) {
    error.style.display = "flex";
    error.innerText = "Email field cannot be left blank";
    email.classList.add("error-email");
  } else if (!isValidEmail(emailValue)) {
    email.classList.add("error-email");
    error.innerText = "Email is invalid";
    error.style.display = "flex";
  } else {
    error.style.display = "none";
    error.innerText = "";
    email.classList.remove("error-email");
  }
});

function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
