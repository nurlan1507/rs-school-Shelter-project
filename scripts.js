let burg = document.querySelector('.menu__burger');
let popup = document.querySelector('.popup__burger__menu');
let body = document.querySelector('.body');
burg.addEventListener('click', function() {
    burg.classList.toggle('active')
    popup.classList.toggle('active')
    body.classList.toggle('ban')
})