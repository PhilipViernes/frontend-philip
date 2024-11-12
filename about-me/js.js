// Animation through scrolling

const nav = document.querySelector(".menu");
const navContainer = document.querySelector(".nav-container");
let scrollTimeout;
window.addEventListener('scroll', () => {
    nav.style.opacity = "0.6";
    navContainer.style.opacity = "1";
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        nav.style.opacity = "1";
        nav.style.transition = "400ms";
    }, 500);
});


const closeNav = document.querySelector('.close-icon svg');
const openNav = document.querySelector('.open-menu svg');
const mobileNav = document.querySelector('nav');

closeNav.addEventListener('click', () => {
    mobileNav.style.display = "none";
    openNav.style.display = "flex";
})
openNav.addEventListener('click', () => {
    mobileNav.style.display = "block";
    mobileNav.style.position = "absolute";
    mobileNav.style.top = "10%";
})