
const currentYear = new Date().getFullYear();
let year = document.getElementById("currentyear");
year.textContent = currentYear;

const currentDate = new Date();
let paragraph2 = document.getElementById("lastModified");
paragraph2.textContent = `Last modification: ${currentDate}`;

