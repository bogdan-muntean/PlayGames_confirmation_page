import {
  toggleImageVisibility,
  inputValidation,
  checkboxValidation,
  onChangeCheckboxValidation,
  onChangeInputValidation,
} from "./components/LandingPage/landingPageFunctions.js";
import LandingPage from "./components/LandingPage/LandingPage.js";
import ConfirmationPage from "./components/ConfirmationPage/ConfirmationPage.js";
import { inputCodeValidation } from "./components/ConfirmationPage/confirmationPageFunctions.js";
import SuccesPage from "./components/SuccesPage/SuccesPage.js";

loadContent(LandingPage);

let checkbox = document.querySelector("#customCheckbox");
checkbox.addEventListener("click", toggleImageVisibility);
checkbox.addEventListener("input", onChangeCheckboxValidation);

let continueBtn = document.querySelector("#continueBtn");
continueBtn.addEventListener("click", validationToContinue);

let phoneInput = document.querySelector("#phoneNumber");
phoneInput.addEventListener("input", onChangeInputValidation);

// ### Functions ###

export function loadContent(callback) {
  let containerParent = document.querySelector(`#parent-container`);
  containerParent.innerHTML = callback();
}

export function validationToContinue() {
  let principalContainer = document.querySelector("#principal-container");
  if (principalContainer.classList.contains("landing-page")) {
    let inputValidationValue = inputValidation();
    let checkboxValidationValue = checkboxValidation();
    if (inputValidationValue && checkboxValidationValue) {
      loadContent(ConfirmationPage);
      let continueBtn = document.querySelector("#continueBtn");
      continueBtn.addEventListener("click", validationToContinue);
    }
  } else if (principalContainer.classList.contains("confirmation-page")) {
    let inputCodeValidationValue = inputCodeValidation();
    if (inputCodeValidationValue) {
      loadContent(SuccesPage);
    }
  }
}
