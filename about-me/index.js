// Facts Animation
const factsSection = document.querySelector('.facts');
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
window.addEventListener('scroll', () => {
    if (one.getBoundingClientRect().top < window.innerHeight) {
        one.classList.add('show');
    }
    else {
        one.classList.remove('show');
    }
})
window.addEventListener('scroll', () => {
    if (two.getBoundingClientRect().top < window.innerHeight) {
        two.classList.add('showTwo');
    }
    else {
        two.classList.remove('showTwo');
    }
})
window.addEventListener('scroll', () => {
    if (three.getBoundingClientRect().top < window.innerHeight) {
        three.classList.add('showThree');
    }
    else {
        three.classList.remove('showThree');
    }
})
window.addEventListener('scroll', () => {
    if (four.getBoundingClientRect().top < window.innerHeight) {
        four.classList.add('showFour');
    }
    else {
        four.classList.remove('showFour');
    }
})


// Section Animation
const contactSections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.4
});

contactSections.forEach(section => {
    observer.observe(section);
});