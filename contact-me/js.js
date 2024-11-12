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




// Forms JS
const loginButton = document.getElementById('loginButton');
const signUpButton = document.getElementById('signUpButton');
const closeForms = document.getElementById('closeForms');
const signUpHref = document.getElementById('signUpHref');
const closeFormsTwo = document.getElementById('closeFormsTwo');
const formSection = document.querySelector('.inputSection');
const signUpSection = document.querySelector('.signUpSection');

closeForms.addEventListener('click', () => {
    formSection.style.display = "none";
    formSection.style.transition = "500ms";
    formSection.style.cursor = "pointer";
})
loginButton.addEventListener('click', () => {
    formSection.style.display = "flex";
    formSection.style.transition = "500ms";
})
signUpButton.addEventListener('click', () => {
    signUpSection.style.display = "flex";
    signUpSection.style.transition = "500ms";
    signUpSection.style.cursor = "pointer";
})
signUpHref.addEventListener('click', () => {
    signUpSection.style.display = "flex";
    signUpSection.style.transition = "500ms";
    signUpSection.style.cursor = "pointer";
    formSection.style.display = "none";
})
closeFormsTwo.addEventListener('click', () => {
    signUpSection.style.display = "none";
    signUpSection.style.transition = "500ms";
})