import LandingPage from "./components/LandingPage/LandingPage.js";


let containerPrincipal = document.querySelector(`.principal-container`);
loadContent(LandingPage);

window.addEventListener("load", () => {
  let checkbox = document.querySelector("#customCheckbox");
  checkbox.addEventListener("click", toggleImageVisibility);

  let continueBtn = document.querySelector("#continueBtn")
  continueBtn.addEventListener("click", validationToContinue)
});

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
  let inputValidationValue = inputValidation() 
  let checkboxValidationValue = checkboxValidation()
  if (inputValidationValue && checkboxValidationValue) {
    console.log("is valid")
    loadContent(ConfirmationPage);
  } 
}

function checkboxValidation() {
  let checkboxValue = document.querySelector("#customCheckbox");
  let checkboxPar = document.querySelector(".check-terms-par")
  let checkbox = document.querySelector(".check-terms-checkbox")
  console.log(checkboxValue.checked)
  if(!checkboxValue.checked){
    checkboxPar.classList.add('warning'); 
    checkbox.classList.add('warning'); 
    return 0;
  } else{
    checkboxPar.classList.remove('warning'); 
    checkbox.classList.remove('warning'); 
    return 1;
  }
}

function inputValidation() {
  // Get the phone number value
  let phoneNumber = document.querySelector("#phoneNumber").value;
  let warningContainer = document.querySelector("#warning-text-input");

  // Define a regular expression pattern for the phone number
  let pattern = /^\+40\d{9}$/;
  let fillToContinuePattern = /^\+40\d{0,8}$/

  // Check if the phone number matches the pattern, else, display warning message
  if(pattern.test(phoneNumber)) {
    warningContainer.innerHTML = ""
    return 1;
  }
  else if(fillToContinuePattern.test(phoneNumber)) 
    warningContainer.innerHTML = "Please fill out the phone number to continue."
  else 
    warningContainer.innerHTML = "Please enter a valid phone number to continue."
  return 0;
}
