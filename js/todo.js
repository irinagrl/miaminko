// To Do list
const todoItems = [{
        name: "Зубы (утро) 5",
        value: 5,
    },
    {
        name: "Зубы (вечер) 5",
        value: 5,
    },
    {
        name: "Заправить постель 5",
        value: 5,
    },
    {
        name: "Овощь, фрукт, новое 10",
        value: 10,
    },
    {
        name: "Логопед 10",
        value: 10,
    },
]

//create todo list
function render() {
    for (let i = 0; i < todoItems.length; i++) {
        createCard(todoItems[i]);
    }
}

render(todoItems);

function getItemElement(item) {
    const itemTemplate = document.querySelector('#todo__template').content;
    const itemElement = itemTemplate.cloneNode(true);
    itemElement.querySelector('.todo__list_item').innerText = item.name;
    return itemElement;
}

function createCard(item) {
    const list = document.querySelector('.todo__list');
    const itemElement = getItemElement(item);
    list.appendChild(itemElement);
}

function getPoints() {
    const list = document.querySelector('.todo__list');
    const items = list.querySelectorAll('.todo__list_item');
    let total = 0;

    for (const item of items) {
        if (item.classList.contains('checked')) {
            const points = Number(item.innerText.replace(/[^0-9]/g, ''));
            total += points;
        }
    }

    return total;
}

function selectItemHandler(evt) {
    const selectedCard = evt.target.closest('.todo__list_item');
    selectedCard.classList.toggle('checked');
}

document.querySelector('.todo__list').addEventListener('click', selectItemHandler);

//progress bar style
function setBarStyle() {
    let width = Number(window.localStorage.getItem('width'));
    if (width > 1) {
        document.querySelector('.progress__bar').style.width = width + 'px';
        document.querySelector('.progress__bar').style.backgroundColor = '#1abc9c';
    }
}

//set localStorage
function setLocalStorage() {
    if (localStorage.getItem('width') === null) {
        window.localStorage.setItem('width', JSON.stringify(0));
    } {
        window.localStorage.getItem('width');
    }
    setBarStyle();
}
setLocalStorage();

//change bar width
function updateLocalStorage() {
    const points = JSON.parse(localStorage.getItem('days'));
    const pointsEarned = document.querySelectorAll('.earned');
    const days = document.querySelectorAll('.btn-day');

    // console.log(days)
    for (let i = 0; i < pointsEarned.length; i++) {
        if (days[i].classList.contains('active')) {
            console.log(pointsEarned[i].textContent)
            // console.log(Object.values(points[1]))

        }
    }
    // for (let i = 0; i < pointsEarned.length; i++) {
    //     pointsEarned[i].textContent = Object.values(points[i]).toString();
    //     console.log(pointsEarned[i].textContent);

    // }
    let width = Number(window.localStorage.getItem('width'));
    width = width + getPoints();
    window.localStorage.setItem('width', width);
}

//Button actions
function buttonHandler() {
    updateLocalStorage();
    setBarStyle();
    const list = document.querySelector('.todo__list');
    const items = list.querySelectorAll('.todo__list_item');
    const days = document.querySelectorAll('.btn-day');

    for (const item of items) {
        if (item.classList.contains('checked')) {
            item.classList.remove('checked');
        }
    }
}

document.querySelector('.button').addEventListener('click', buttonHandler);