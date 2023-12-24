let celsiusInput = document.getElementById("celsiusInput");
let farenheitInput = document.getElementById("farenheitInput");

celsiusInput.addEventListener("input", celsiusToFarenheit);
farenheitInput.addEventListener("input", farenheitToCelsius);

function celsiusToFarenheit() {
  let c = this.value;
  let f = (c * 9) / 5 + 32;
  if (!Number.isInteger(f)) {
    f = f.toFixed(4);
  }
  farenheitInput.value = f;
}

function farenheitToCelsius() {
  let f = this.value;
  let c = ((f - 32) * 5) / 9;
  if (!Number.isInteger(c)) {
    c = c.toFixed(4);
  }
  celsiusInput.value = c;
}
