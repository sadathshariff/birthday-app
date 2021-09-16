const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#checkNumber");
const outputBox = document.querySelector("#output-box");

function hideMessage() {
  outputBox.style.display = "none";
}
function showMessage(msg) {
  outputBox.innerText = msg;
  outputBox.style.display = "block";
}

hideMessage();
function compareValues(sum, luckyNumber) {
  // console.log(sum);
  showMessage();
  if (sum % luckyNumber === 0) {
    showMessage("Your birthday is lucky 🎊");
    outputBox.style.backgroundColor = "green";
  } else {
    showMessage("You Make your own Luck ");
    outputBox.style.backgroundColor = "black";
  }
}

function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);

  if (sum && dob && luckyNumber.value > 0) {
    console.log(sum, dob, Number(luckyNumber.value));
    compareValues(sum, Number(luckyNumber.value));
  } else if (Math.sign(luckyNumber.value) === -1) {
    showMessage("Lucky Number Cannot be Negative");
  } else {
    showMessage(" ⚠️ Please Enter both the fields ");
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
