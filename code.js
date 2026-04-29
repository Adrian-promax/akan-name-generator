// Akan names
const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Simple date validation using JS Date (100% reliable)
function isValidDate(day, month, year) {
  const d = new Date(year, month - 1, day);

  return (
    d.getFullYear() === year &&
    d.getMonth() === month - 1 &&
    d.getDate() === day
  );
}

document.getElementById("akanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.getElementById("gender").value;

  // HTML validation backup
  if (!day || !month || !year || !gender) {
    alert("Fill all fields");
    return;
  }

  // Real date validation
  if (!isValidDate(day, month, year)) {
    alert("Invalid date");
    return;
  }

  // Get day of week (simpler + correct)
  const date = new Date(year, month - 1, day);
  const dayIndex = date.getDay();

  const name = gender === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];

  document.getElementById("result").textContent =
    `Born on ${days[dayIndex]} → Akan name: ${name}`;
});
