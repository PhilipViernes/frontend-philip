import Typed from './typed.js';
const typed = new Typed('.elements', {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 50,
});
const outer = document.querySelector('.outer-container');
const body = document.querySelector('body')
body.addEventListener('mouseover', event=>{
    event.target.outer
})
