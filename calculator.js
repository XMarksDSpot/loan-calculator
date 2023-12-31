window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 40000;
  document.getElementById("loan-years").value = 5;
  document.getElementById("loan-rate").value = 5;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
updateMonthly(calculateMonthlyPayment(values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const {amount, years, rate} = values;
  const n = years * 12;
  const r = rate / 100 / 12;
  const denominator = Math.pow((1 + r), -n);
  const payment = (r * amount) / (1 - denominator);
  return payment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").textContent = `$${monthly}`;
}

window.onload = function() {
  setupIntialValues();
  update();
}

document.getElementById("loan-amount").addEventListener("input", update);
document.getElementById("loan-years").addEventListener("input", update);
document.getElementById("loan-rate").addEventListener("input", update);
