let display = document.getElementById("display")

function appendToDisplay(value) {
  display.value += value
  console.log(display)
}

function clearDisplay() {
  display.value = ""
}

function calculate() {
  try {
    display.value = eval(display.value)
  } catch (error) {
    display.value = "Error"
  }
}
