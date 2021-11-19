console.log('hello')
const button = document.querySelector('button');
console.log('button: ', button);
const h1 = document.querySelector('h1'); 
const h4 = document.querySelector('h4');

button.onclick = function onclick (event) {
    console.log(event.type + ' got fired'); 
    h1.classList.toggle('darkfont');
    h4.classList.toggle('darkfont');
  }