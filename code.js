// Arrays for Akan names like a list
const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const femaleNames = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama"];
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Calculate day of week using the formula
function calculateDayOfWeek(CC, YY, MM, DD) {     //the parameters
  let term1 = Math.floor(CC / 4);                 //accounting for the leap years
  let term2 = -2 * CC - 1;                        //adjusts calender when shifting through the centuries
  let term3 = Math.floor((5 * YY) / 4);           //acounts for the leap years
  let term4 = Math.floor((26 * (MM + 1)) / 10);   //adjusts the month length

  let result = (term1 + term2 + term3 + term4 + DD) % 7;

  if (result < 0) {
    result += 7;
  }

  return result;
}

// Check for leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Main function to generate Akan name
function generateAkanName(event) {
  event.preventDefault(); // Prevent form from refreshing page

  // Get values - MATCHING YOUR HTML IDs
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.getElementById("gender").value;

  // VALIDATION 1: Check if fields are empty
  if (isNaN(day) || document.getElementById("day").value === "") {
    alert("Please enter your day of birth (1-31)");
    return;
  }

  if (isNaN(month) || document.getElementById("month").value === "") {
    alert("Please enter your month of birth (1-12)");
    return;
  }

  if (isNaN(year) || document.getElementById("year").value === "") {
    alert("Please enter your year of birth");
    return;
  }

  if (gender === "") {
    alert("Please select your gender.");
    return;
  }

  // VALIDATION 2: Check ranges
  if (day < 1 || day > 31) {
    alert("Day must be between 1 and 31");
    return;
  }

  if (month < 1 || month > 12) {
    alert("Month must be between 1 and 12");
    return;
  }

  if (year < 1900 || year > 2026) {
    alert("Year must be between 1900 and 2026");
    return;
  }

  // VALIDATION 3: Check for invalid dates
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (isLeapYear(year)) {
    monthDays[1] = 29;
  }

  if (day > monthDays[month - 1]) {
    alert(`Invalid date! ${month}/${day} does not exist.`);
    return;
  }

  // Calculate century and year
  const century = Math.floor(year / 100);
  const yearInCentury = year % 100;

  const dayIndex = calculateDayOfWeek(century, yearInCentury, month, day);

  // Getting the name based 
  let akanName;
  if (gender === "male") {
    akanName = maleNames[dayIndex];
  } else {
    akanName = femaleNames[dayIndex];
  }

  // Display result - MATCHING YOUR HTML IDs
  document.getElementById("akanName").textContent = akanName;
  document.getElementById("dayInfo").textContent =
    `Born on a ${daysOfWeek[dayIndex]}`;
  document.getElementById("resultCard").style.display = "block";

  // Scroll to result
  document
    .getElementById("resultCard")
    .scrollIntoView({ behavior: "smooth", block: "center" });
}

// Reset function
function resetForm() {
  document.getElementById("day").value = "";
  document.getElementById("month").value = "";
  document.getElementById("year").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("resultCard").style.display = "none";
}

// Close result function
function closeResult() {
  document.getElementById("resultCard").style.display = "none";
}

// Event listeners
document
  .getElementById("generateBtn")
  .addEventListener("click", generateAkanName);
document.getElementById("resetBtn").addEventListener("click", resetForm);
document.getElementById("closeBtn").addEventListener("click", closeResult);
