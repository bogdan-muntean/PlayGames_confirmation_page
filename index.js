import showPhoneRegistContainer from "./components/phoneRegistration/phoneRegistContainer.js";

let containerPrincipal = document.querySelector(`.principal-container`);

loadContent(showPhoneRegistContainer);

function loadContent(callback) {
    containerPrincipal.innerHTML = callback();
}