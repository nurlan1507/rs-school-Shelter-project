let pageNumtemp;
let maxPageValue;
let catalog = document.querySelector('.main__catalog');
let btnBack = document.querySelector('.button__single__back');
let btnDoubleBack = document.querySelector('.button__double__back');
let btnDoubleForward = document.querySelector('.button__double__forward');
let btnForward = document.querySelector('.button__single__forward');
let pageNum = 1;
let database = JSON.parse(localStorage.getItem('data'))
let petsOnPage;
let start;
let end;


let current__page = document.querySelector('.current__page')
const width1280 = window.matchMedia('(min-width: 1247px)');
let cardArr = [];
let cardBtnArr = []
console.log('launch')


function definePoints(petsonpage) {
    if (localStorage.getItem('current') === null) {
        localStorage.setItem('current', pageNum);
    } else {
        pageNum = localStorage.getItem('current');
    }
    start = (parseInt(pageNum) - 1) * petsonpage;
    end = parseInt(start) + petsonpage;
    current__page.innerHTML = localStorage.getItem('current');
}

function assignPopup(cardArrBtn) {
    cardArrBtn.forEach((item) => {
        item.onclick = () => {
            console.log("loggin")
            let target = event.target;
            if (event.target.className !== 'card__btn__content') {
                return
            }
            console.log(database.indexOf(target))
            let ind = cardArrBtn.indexOf(target) + ((parseInt(petsOnPage) * (parseInt(localStorage.getItem('current')) - 1)));
            console.log(ind)
            popinup(ind)
        }
    })
}







function appendCards() {
    cardArr = [];
    for (let i = start; i < end; i++) {
        let card = document.createElement('div');
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
        catalog.appendChild(card);
        card.appendChild(petphoto);
        card.appendChild(petname);
        card.appendChild(cardBtn);
        card.append(cardBtncontent);
        cardArr.push(card);
        cardBtnArr.push(cardBtncontent);
    }
    assignPopup(cardBtnArr);
}


btnForward.addEventListener('click', () => {
    pageNum = current__page.innerHTML
    pageNum = parseInt(pageNum) + 1;
    start = (parseInt(pageNum) - 1) * petsOnPage;
    end = parseInt(start) + petsOnPage
    if (database.slice(start, end).length != 0) {
        cardBtnArr.splice(0, cardBtnArr.length)
        if (database.slice(start, end).length < petsOnPage) {
            localStorage.setItem('maxPageValue', localStorage.getItem('current'));
        }
        cardArr.forEach(item => {
            item.style.display = "none";
        })
        localStorage.setItem('current', pageNum);
        current__page.innerHTML = localStorage.getItem('current')
        appendCards()
    }
})


btnBack.addEventListener('click', () => {
    if (parseInt(current__page.innerHTML) > 1) {
        cardBtnArr.splice(0, cardBtnArr.length)
        pageNum = current__page.innerHTML;
        pageNum = parseInt(pageNum) - 1;
        start = (parseInt(pageNum) - 1) * petsOnPage;
        end = parseInt(start) + petsOnPage;
        localStorage.setItem('current', pageNum)
        if (database.slice(start, end).length !== 0) {
            btnForward.classList.add('active')
            let previous = document.querySelectorAll('.card');
            previous.forEach(item => {
                item.parentNode.removeChild(item);
            })
            current__page.innerHTML = localStorage.getItem('current');
            appendCards();
        }
    }
})

const appendEight = matchMedia("(min-width:1247px)");

function showFirst(petsOnPage) {
    cardArr.forEach(item => {
        item.style.display = "none";
    })
    cardBtnArr.splice(0, cardBtnArr.length)
    cardArr.splice(0, cardArr.length)
    definePoints(petsOnPage);
    appendCards();
}


function resize() {
    if (appendEight.matches) {
        petsOnPage = 8;
        showFirst(petsOnPage);
    }
    if (window.innerWidth < 1240 && window.innerWidth > 545) {
        petsOnPage = 6;
        showFirst(petsOnPage);
    }
    if (window.innerWidth < 545 && window.innerWidth > 100) {
        petsOnPage = 3;
        showFirst(petsOnPage);
    }
}
window.addEventListener('resize', resize);
resize();