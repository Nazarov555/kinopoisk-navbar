let menu = document.getElementById("menu-btn");
let navbar = document.querySelector("nav");

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
}) 