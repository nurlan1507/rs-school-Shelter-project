let slider__line = document.querySelector('.slider__line');
let slider__line__item = document.createElement('div');
slider__line__item.className = 'slider__line__item';
let offset = 0;
let slideForw = document.querySelector('.slider__btn__forw');
let slideBack = document.querySelector('.slider__btn__back');
let card
console.log(window.getComputedStyle(slider__line__item).gap);
let start = 0;
let end = 0;
let gapValue;
let cardsOnSlider;
let sliderCardArr = [];
let database = JSON.parse(localStorage.getItem('data'));
console.log('launch')
slideForw.addEventListener('click', () => {
    offset = offset - (card.offsetWidth * 3 + gapValue * 3);
    slider__line__item.style.left = offset + 'px'
    if (Math.abs(offset) > slider__line__item.offsetWidth - (card.offsetWidth * 3 + gapValue * 3)) {
        offset = 0;
        slider__line__item.style.left = offset + 'px';
    } else {
        slider__line__item.style.left = offset + 'px';
    }
    console.log(offset)
})

slideBack.addEventListener('click', () => {
    offset = offset + (card.offsetWidth * 3 + gapValue * 3);
    if (offset > 0) {
        offset = 0;
        offset = -((sliderCardArr.length * gapValue) + (card.offsetWidth * sliderCardArr.length)) + (card.offsetWidth * 3 + gapValue * 3);
        slider__line__item.style.left = offset + 'px';
    } else {
        slider__line__item.style.left = offset + 'px'
    }
    console.log(offset)
});
if (window.innerWidth > 1153) {
    appendCards2()
    console.log(sliderCardArr)
}


function appendCards2() {
    for (let i = 0; i < database.length; i++) {
        card = document.createElement('div');
        card.className = 'card';
        let petphoto = document.createElement('img');
        petphoto.src = database[i].img;
        let petname = document.createElement('div');
        petname.className = 'petname';
        let cardBtn = document.createElement('div');
        cardBtn.className = 'card__btn';

        let cardBtncontent = document.createElement('a');
        cardBtncontent.className = 'card__btn__content';
        cardBtncontent.style.cursor = 'pointer'
        cardBtncontent.textContent = 'Learn More';
        let name = database[i].name;
        petname.textContent = name;
        slider__line__item.appendChild(card);
        card.appendChild(petphoto);
        card.appendChild(petname);
        card.appendChild(cardBtn);
        card.append(cardBtncontent);
        sliderCardArr.push(card)
    }
    slider__line.appendChild(slider__line__item);
}


const mediaLarge = matchMedia('(min-width:1275px)');
if (mediaLarge.matches === true) {
    gapValue = 80;

}
if (window.innerWidth < 1274) {
    gapValue = 60;
}

/* const mediaq = new Promise(function(resolve, reject) {
        () => {
            if (mediaLarge.matches === true) {
                gapValue = 80;
            }
            if (window.innerWidth<1274){
                gapValue = 60;
            }
        }
    }) */



/* function resize() {
    if (window.innerWidth < 1216) {
        let gapValue = 40;
        slider__line__item.style.gap = gapValue + 'px';
        slider__line.style.width = (card.offsetWidth * 3 + gapValue) + 'px'
    }
}
window.addEventListener('resize', resize);
resize(); */
/* let slider__line = document.querySelector('.slider__line');
let slider__line__item = document.createElement('div');
slider__line__item.className = 'slider__line__item'
let offset = 0;
let slider__forward = document.querySelector('.slider__btn__forw');

if (window.innerWidth > 1153) {
    let petsOnSlider = 3;
    appendCards2(petsOnSlider);
}

slider__forward.onclick = function() {
    offset = offset - 1050;
    slider__line__item.style.left = offset + 'px';
    alert('FORW')
} */

/* const moveForw = new Promise(function(resolve, reject) {
    console.log('prepare')
    resolve()
})
moveForw.then(() => {
    setTimeout(() => {
        console.log('execute');
    }, 2000)
}) */