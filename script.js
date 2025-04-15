function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  if (weight && height) {
    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById("bmiResult").textContent = `Your BMI is ${bmi}`;
  } else {
    document.getElementById("bmiResult").textContent = "Please enter valid inputs";
  }
}
