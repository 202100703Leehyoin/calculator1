let currentDisplay = "0";

function updateDisplay() {
  const display = document.getElementById("result");
  display.innerText = currentDisplay;
}

function appendChar(char) {
  if (currentDisplay === "0") {
    currentDisplay = "";
  }
  currentDisplay += char;
  updateDisplay();
}

function clearDisplay() {
  currentDisplay = "0";
  updateDisplay();
}

function calculate() {
  currentDisplay = eval(currentDisplay).toString
