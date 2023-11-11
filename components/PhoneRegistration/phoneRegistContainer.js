export default function showPhoneRegistContainer () {
    return `
        <div class="phone-regist-container">
            <div class="legal1">
                USD 0.25 / Day (5% vat eXTRA). This is autorenewal service. 1st day Free
            </div>
            <div class="legal2">
                <p>Receive an access code by SMS</p> 
                <p><span>Enter your phone number</span></p>
            </div>
            <div class="rectangle-phone-input">
                <div class="rectangle-phone-input-left-content">
                    <img class="phone-image" src="./assets/phone.svg" alt="Image with a phone">
                    <input type="text" id="phoneNumber" value="+40">
                </div>
                <img class="checkmark" src="./assets/checkmark-gray.svg">
            </div>
            <button onclick="validatePhoneNumber()" id="continueBtn">
                continue
            </button>
            <div class="check-terms-container">
                <div class="check-terms-box"></div>
                <div class="check-terms-text">Please check the box to accept our terms and conditions.</div>
            </div>
        </div>
    `;
}

function validatePhoneNumber() {
    // Get the phone number value
    let phoneNumber = document.querySelector("#phoneNumber").value;

    // Define a regular expression pattern for the phone number
    let pattern = /^\+40\d{9}$/;
    // Check if the phone number matches the pattern
    if (pattern.test(phoneNumber)) {
        document.getElementById("validationResult").innerText = "Phone number is valid.";
    } else {
        document.getElementById("validationResult").innerText = "Invalid phone number format. It should be in the pattern +40xxxxxxxxx.";
    }
}