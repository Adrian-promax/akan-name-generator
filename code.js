// Arrays for Akan names
const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];

// Calculate day of week using the formula function
function calculateDayOfWeek(CC, YY, MM, DD) {
  let term1 = Math.floor(CC / 4); //adjusting the leap years
  let term2 = -2 * CC - 1; //bcz calender shift backwards counteracting drift
  let term3 = Math.floor((5 * YY) / 4);
  let term4 = Math.floor((26 * (MM + 1)) / 10);

  let result = (term1 + term2 + term3 + term4 + DD) % 7;

  // Handle negative results
  if (result < 0) {
    result += 7;
  }

  return result;
}
// Main function to generate Akan name - VALIDATION
function generateAkanName() {
  // Get values
  const day = parseInt(document.getElementById("date").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.getElementById("gender").value;

  //Validation
  if (!day || !month || !year) {
    alert("Please fill in all fields.");
    return;
  }

  if (!gender) {
    alert("Please select a gender.");
    return;
  }
  if (day < 1 || day > 31) {
    alert("day must be between 1 and 31");
  }
  if (month < 1 || month > 12) {
    alert("Month must be between 1 and 12");
  }
}
const monthDays = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
if (isLeapYear(year)) {
  monthDays[1] = 29;
}

// Calculate century and year
const century = Math.floor(year / 100);
const yearInCentury = year % 100;

const dayIndex = calculateDayOfWeek(century, yearInCentury, month, day);

// Get name based on gender
let akanName;
if (gender === "male") {
  akanName = maleNames[dayIndex];
} else {
  akanName = femaleNames[dayIndex];
}
// Display result
document.getElementById("akanName").textContent = akanName;
document.getElementById("dayOfWeek").textContent =
  `Born on a ${daysOfWeek[dayIndex]}`;
document.getElementById("resultBox").style.display = "block";

// Reset function
function resetForm() {
  document.getElementById("date").value = "";
  document.getElementById("month").value = "";
  document.getElementById("year").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("resultBox").style.display = "none";
}
// Close result function
function closeResult() {
  document.getElementById("resultBox").style.display = "none";
}
// Event listeners
document.getElementById("generateBtn");
document.addEventListener("click", generateAkanName);
document.getElementById("resetBtn").addEventListener("click", resetForm);
document.getElementById("closeBtn").addEventListener("click", closeResult);
