

// Display date and time in the footer section
const currentYear = new Date().getFullYear();
let year = document.getElementById("currentyear");
year.textContent = currentYear;

const currentDate = new Date();
let paragraph2 = document.getElementById("lastModified");
paragraph2.textContent = `Last modification: ${currentDate}`;

// windchill factor

const windChill = document.getElementById("wind-chill");
const temperature = 16;
const windSpeed = 11;

function calculateWindChill(temperature, windSpeed) {
    return (temperature <= 10) && (windSpeed > 4.8) ? (13.12 + 0.6215 * (temperature) - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * (temperature) * Math.pow(windSpeed, 0.16)).toFixed(1) + "°C" : "N/A";
}

windChill.innerHTML = `Wind Chill: ${calculateWindChill(temperature, windSpeed)}`;

