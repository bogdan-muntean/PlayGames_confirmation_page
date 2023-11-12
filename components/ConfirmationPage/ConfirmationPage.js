export default function ConfirmationPage () {
    return `
        <div class="confirmation-page" id="principal-container">
            <div class="legal1">
                USD 0.25 / Day (5% vat eXTRA). This is autorenewal service. 1st day Free
            </div>
            <div class="legal2">
                <p>Enter the received access code</p> 
                <p><span>Your code has been sent via SMS</span></p>
            </div>
            <div class="rectangle-code-input">
                <input type="text" id="codeNumber" placeholder="Code">
            </div>
            <div id="warning-text-input"></div>
            <button class="confirmation-btn" id="continueBtn">
                continue
            </button>
            <div class="check-terms-container" style="visibility: hidden;">
                <label class="check-terms-label" for="customCheckbox" >
                    <input type="checkbox" id="customCheckbox">
                    <span class="check-terms-checkbox">
                        <img id="checkImage" src="./assets/check.svg">
                    </span>
                    <p class="check-terms-par">Please check the box to accept our terms and conditions.</p>
                </label>                
            </div>
            <div class="legal3">
                Welcome to Play Games! Enjoy fully unlocked premium ad free games. Join Millions of other players now! The subscription rate for Play Games is USD 0.25/day (proportionally based on your available balance). Charges will be deducted from Ooredoo account. Your subscription will renew automatically until cancelled. To cancel, text UNSUB PGD to 92914. To use this service, you must be 18+ years old or have received permission from your parents or person authorised to pay your bill.
            </div>
            <nav class="footer">
                <div class="footer-option">Terms & Conditions</div>
                <div class="footer-option">Privacy Policy</div>
                <div class="footer-option">Help</div>
            </nav>
        </div>
    `;
};

