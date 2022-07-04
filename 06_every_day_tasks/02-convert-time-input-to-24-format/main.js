// Write a function which can convert the time input given in 12 hours format to 24 hours format

// convertTo24HrsFormat("12:10AM");    // 00:10
// convertTo24HrsFormat("5:00AM");     // 05:00
// convertTo24HrsFormat("12:33PM");    // 12:33
// convertTo24HrsFormat("01:59PM");    // 13:59
// convertTo24HrsFormat("11:8PM");     // 23:08
// convertTo24HrsFormat("10:02PM");    // 22:02

const convertTo24HrsFormat = (time) => {
  // Convert time to upper case
  time = time.toUpperCase();
  // Get modifier AM or PM
  let modifier = time.includes("AM") ? "AM" : "PM";
  // remove AM and PM from time
  time = time.replace(/AM|PM/g, "");
  // Get hours and minutes
  let [hours, minutes] = time.split(":");

  if (hours === "12") hours = "00";
  if (modifier === "PM") hours = String(+hours + 12);
  // Pad string at start with zeroes
  hours = hours.padStart(2, "0");
  minutes = minutes.padStart(2, "0");

  return `${hours}:${minutes}`;
};

console.log(convertTo24HrsFormat("12:10am")); // 00:10
console.log(convertTo24HrsFormat("5:00AM")); // 05:00
console.log(convertTo24HrsFormat("12:33PM")); // 12:33
console.log(convertTo24HrsFormat("01:59PM")); // 13:59
console.log(convertTo24HrsFormat("11:8PM")); // 23:08
console.log(convertTo24HrsFormat("10:02PM")); // 22:02
