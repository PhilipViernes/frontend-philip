
const outer = document.querySelector('.outer-container');
const body = document.querySelector('body')
outer.addEventListener('mouseover', ()=> {
    body.classList.add('bodyBack')
})