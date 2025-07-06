
// Display date and time in the footer section
const currentYear = new Date().getFullYear();
let year = document.getElementById("currentyear");
year.textContent = currentYear;

const currentDate = new Date();
let paragraph2 = document.getElementById("lastModified");
paragraph2.textContent = `Last modification: ${currentDate}`;

// Humburger Menu
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});

// if (window.innerWidth >= 500) {
//     hambutton.remove();
// }