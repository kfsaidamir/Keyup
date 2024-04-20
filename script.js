const key = document.querySelector('.like');
const code = document.querySelector('.code');
const locat = document.querySelector('.location');
const which = document.querySelector('.which');
const text = document.querySelector('h1');
const header = document.querySelector('.header__content');
const clear = document.querySelector('button')
const input = document.querySelector('input')

document.addEventListener('keyup', (e) => {
    key.style.color = 'white';
    key.style.fontSize = '25px'
    which.style.fontSize = '25px'
    locat.style.fontSize = '25px'
    code.style.fontSize = '25px'
    which.style.color = 'white';
    code.style.color = 'white';
    locat.style.color = 'white';

    which.innerText = e.which;
    key.innerText = e.key;
    code.innerText = e.code;
    locat.innerText = e.location;
});

clear.addEventListener('click', () => {
    location.reload()
})



