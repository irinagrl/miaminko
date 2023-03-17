// //To Do list
const todoItems = [{
        name: "Почистить зубы (утро)",
        value: 5,
    },
    {
        name: "Почистить зубы (вечер)",
        value: 5,
    },
    {
        name: "Заправить постель",
        value: 5,
    },
    {
        name: "Съесть овощь/фрукт/новое",
        value: 10,
    },
    {
        name: "Логопед",
        value: 10,
    },
]

//create todo list
function render(items) {
    for (let i = 0; i < todoItems.length; i++) {
        createCard(todoItems[i]);
    }
}

render(todoItems);

function getCardElement(item) {
    const cardTemplate = document.querySelector('#todo__template').content;
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.todo__list_item').innerText = item.name;
    return cardElement;
}

function createCard(item) {
    const list = document.querySelector('.todo__list');
    const cardElement = getCardElement(item);
    list.appendChild(cardElement);
}

function selectItemHandler(evt) {
    const selectedCard = evt.target.closest('.todo__list_item');
    selectedCard.classList.toggle('checked');
}

document.querySelector('.todo__list').addEventListener('click', selectItemHandler)


//set progress bar
function setBarWidth() {
    if (localStorage.getItem('width') === null) {
        return localStorage.setItem('width', JSON.stringify(0));
    } {
        return localStorage.setItem('width', getBarWidth());
    }
}

function getBarWidth() {
    return JSON.parse(localStorage.getItem('width'));
}

// function updateWidth() {
//     const total = document.getElementById("total").value;
//     console.log(total)
// }
// setBarWidth()

function setBarStyle() {
    const widthInPx = getBarWidth() + 'px';
    document.querySelector('.progress__bar').style.width = widthInPx;
    document.querySelector('.progress__bar').style.backgroundColor = '#1abc9c';
}

setBarStyle();

//Button actions
function buttonHandler() {
    updateWidth()
    location.reload();
}

document.querySelector('.button').addEventListener('click', buttonHandler)