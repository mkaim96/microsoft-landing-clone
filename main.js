const burger = document.querySelector("#burger");
const dropdown = document.querySelector(".nav-mobile-dropdown");
const overlay = document.querySelector(".overlay");


burger.addEventListener('click', () => {
    dropdown.classList.toggle('show');
    overlay.classList.add('show');
})

overlay.addEventListener('click', () => {
    dropdown.classList.remove('show');
    overlay.classList.remove('show');
})