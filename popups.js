let pet__popup = document.querySelector('.pet__popup');
let popup__img = document.querySelector('.popup__img');
let pet__name = document.querySelector('.pet__name');
let pet__type = document.querySelector('.pet__type');
let pet__descr = document.querySelector('.pet__description');
let sh__item = document.querySelectorAll('.short__item');
let pet__popup__exit = document.querySelector('.popup__exit__button');
pet__popup__exit.onclick = () => {
    pet__popup.classList.toggle('active');
}

function popinup(ind) {
    pet__popup.classList.toggle('active');
    popup__img.src = database[ind].img;
    pet__name.textContent = database[ind].name;
    pet__type.textContent = `${database[ind].type} - ${database[ind].breed}`;
    pet__descr.textContent = database[ind].description;
    sh__item[0].textContent = `<strong>Age:</strong> ${database[ind].age}`;
    sh__item[1].textContent = `<strong>inoculation:</strong> ${database[ind].inoculations}`;
    sh__item[2].textContent = `<strong>diseases:</strong> ${database[ind].diseases}`;
    sh__item[3].textContent = `<strong>diseases:</strong> ${database[ind].parasites}`;
}