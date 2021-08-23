const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#checkNumber");
const outputBox = document.querySelector("#output-box");

function hideMessage() {
  outputBox.style.display = "none";
}
function showMessage() {
  outputBox.style.display = "block";
}

hideMessage();
function compareValues(sum, luckyNumber) {
  console.log(sum);
  showMessage();
  if (sum % luckyNumber === 0) {
    outputBox.innerText = "Your birthday is lucky 🎊";
  } else {
    outputBox.innerText = "You Make your own Luck 😎";
  }
}

function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  compareValues(sum, luckyNumber.value);

  if (sum && dob && luckyNumber.value) {
    compareValues(sum, luckyNumber.value);
  } else {
    outputBox.innerText = " ⚠️ Please Enter both the fields ⚠️";
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}

checkNumberButton.addEventListener("click", checkBirthDateIsLucky);
