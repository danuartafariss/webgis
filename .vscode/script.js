const burger = document.querySelector('.burger');
const sideNav = document.querySelector('.side-nav');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    if (sideNav.style.width === '250px') {
        sideNav.style.width = '0';
    } else {
        sideNav.style.width = '250px';
    }

    navLinks.classList.toggle('responsive');
});