import LandingPage from "./components/LandingPage/LandingPage.js";

let containerPrincipal = document.querySelector(`.principal-container`);
loadContent(LandingPage);

let checkbox = document.querySelector("#customCheckbox");
checkbox.addEventListener("click", toggleImageVisibility);
checkbox.addEventListener("input", onChangeCheckboxValidation);

let continueBtn = document.querySelector("#continueBtn");
continueBtn.addEventListener("click", validationToContinue);

let phoneInput = document.querySelector("#phoneNumber");
phoneInput.addEventListener("input", onChangeInputValidation);

// ### Functions ###

function loadContent(callback) {
  containerPrincipal.innerHTML = callback();
}

function toggleImageVisibility() {
  // Display or hide checkmark image, when we change checkbox's status (checked / unchecked).
  let checkbox = document.querySelector("#customCheckbox");
  let image = document.querySelector("#checkImage");
  image.style.display = checkbox.checked ? "block" : "none";
}

function validationToContinue() {
  let inputValidationValue = inputValidation();
  let checkboxValidationValue = checkboxValidation();
  if (inputValidationValue && checkboxValidationValue) {
    loadContent(ConfirmationPage);
  }
}

function checkboxValidation() {
  let checkboxValue = document.querySelector("#customCheckbox");
  let checkboxPar = document.querySelector(".check-terms-par");
  let checkbox = document.querySelector(".check-terms-checkbox");
  if (!checkboxValue.checked) {
    checkboxPar.classList.add("warning");
    checkbox.classList.add("warning");
    return 0;
  } else {
    checkboxPar.classList.remove("warning");
    checkbox.classList.remove("warning");
    return 1;
  }
}

function onChangeCheckboxValidation() {
  let checkboxValue = document.querySelector("#customCheckbox");
  let checkboxPar = document.querySelector(".check-terms-par");
  let checkbox = document.querySelector(".check-terms-checkbox");
  if (checkboxValue.checked) {
    checkboxPar.classList.remove("warning");
    checkbox.classList.remove("warning");
  }
}

function inputValidation() {
  // Get the phone number value
  let phoneNumber = document.querySelector("#phoneNumber").value;
  let warningContainer = document.querySelector("#warning-text-input");
  let checkmark = document.querySelector(".checkmark");

  // Define a regular expression pattern for the phone number
  let correctPattern = /^\+40\d{9}$/;
  let fillToContinuePattern = /^\+40\d{0,8}$/;

  // Check if the phone number matches the pattern, else, display warning message
  if (correctPattern.test(phoneNumber)) {
    warningContainer.innerHTML = "";
    checkmark.classList.remove("warning");
    checkmark.classList.add("correct");
    return 1;
  } else if (fillToContinuePattern.test(phoneNumber)) {
    warningContainer.innerHTML =
      "Please fill out the phone number to continue.";
  } else {
    warningContainer.innerHTML =
      "Please enter a valid phone number to continue.";
  }
  checkmark.classList.remove("correct");
  checkmark.classList.add("warning");
  return 0;
}

function onChangeInputValidation() {
  let phoneNumber = document.querySelector("#phoneNumber").value;
  let checkmark = document.querySelector(".checkmark");

  let correctPattern = /^\+40\d{9}$/;

  if (correctPattern.test(phoneNumber)) {
    checkmark.classList.remove("warning");
    checkmark.classList.add("correct");
  } else {
    checkmark.classList.remove("warning");
    checkmark.classList.remove("correct");
  }
}
