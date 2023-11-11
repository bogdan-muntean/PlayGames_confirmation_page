export default function showPhoneRegistContainer () {
    return `
        <div class="phone-regist-container">
            <div class="legal1">
                USD 0.25 / Day (5% vat eXTRA). This is autorenewal service.<br>
                1st day Free
            </div>
            <div class="legal2">
                Receive an access code by SMS <br>
                <span>Enter your phone number</span>
            </div>
            <div class="rectangle-phone-input">
                <div class="rectangle-phone-input-left-content">
                    <img src="./assets/phone.svg">
                    <input type="text" id="phoneNumber" value="+40">
                </div>
            </div>
            <button onclick="validatePhoneNumber()" id="continueBtn">
                CONTINUE
            </button>
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