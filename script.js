"use strict";

//input elements
const billInput = document.getElementById("bill");
const tipButtons = document.querySelectorAll(".btn");
const billAmountOutput = document.getElementById("billAmount");
const tipOutput = document.getElementById("tip");
const totalOutput = document.getElementById("total");
const resetButton = document.querySelector(".reset");

//event listeners
billInput.addEventListener("input", calculateTip);
tipButtons.forEach((button) => {
  button.addEventListener("click", handleTipButtonClick);
});
resetButton.addEventListener("click", resetCalculator);

// Function to calculate the tip
function calculateTip() {
  const billAmount = parseFloat(billInput.value);

  const tipPercentage = getSelectedTipPercentage();
  const tipAmount = billAmount * (tipPercentage / 100);

  const totalAmount = billAmount + tipAmount;

  billAmountOutput.textContent = formatAmount(billAmount);
  tipOutput.textContent = formatAmount(tipAmount);
  totalOutput.textContent = formatAmount(totalAmount);
}

// Function to handle tip button clicks
function handleTipButtonClick(event) {
  const button = event.target;

  tipButtons.forEach((button) => {
    button.classList.remove("active");
  });

  button.classList.add("active");

  calculateTip();
}

// Function to get the selected tip percentage
function getSelectedTipPercentage() {
  let selectedPercentage = 0;

  tipButtons.forEach((button) => {
    if (button.classList.contains("active")) {
      selectedPercentage = parseFloat(button.textContent);
    }
  });

  return selectedPercentage;
}

// Function to format the amount with two decimal places
function formatAmount(amount) {
  return amount.toFixed(2);
}

// Function to reset the calculator
function resetCalculator() {
  billInput.value = "";

  tipButtons.forEach((button) => {
    button.classList.remove("active");
  });

  // Reset the output values
  billAmountOutput.textContent = "00.0";
  tipOutput.textContent = "00.0";
  totalOutput.textContent = "00.0";
}
