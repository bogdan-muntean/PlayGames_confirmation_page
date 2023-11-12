export function inputCodeValidation() {
  let codeNumber = document.querySelector("#codeNumber").value;
  let warningContainer = document.querySelector("#warning-text-input");

  let correctPattern = /^0369$/;
  let fillToContinuePattern = /^\d{0,3}$/;

  console.log(codeNumber)
  console.log(correctPattern.test(codeNumber))
  console.log(fillToContinuePattern.test(codeNumber))
  console.log(fillToContinuePattern)
  if (correctPattern.test(codeNumber)) {
    warningContainer.innerHTML = "";
    return 1;
  } else if (fillToContinuePattern.test(codeNumber))
    warningContainer.innerHTML = "Please fill out the code to continue.";
  else 
    warningContainer.innerHTML = "The code you have entered is invalid.";
  return 0;
}

