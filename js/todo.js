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

// //record Points To LocalStorage
// function setPoints() {
//     if (localStorage.clickcount) {
//         localStorage.clickcount = Number(localStorage.clickcount) + 1;
//     } else {
//         localStorage.clickcount = 1;
//     }
//     document.getElementById("demo").innerHTML = localStorage.clickcount;

// }

function updatePoints() {
    const cards = document.querySelectorAll('.day');
    calendar = JSON.parse(localStorage.getItem('pointsPerDay'));
    // console.log(calendar)
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains('active')) {
            const points = cards[i].querySelector('.day__points');
            points.textContent = getPoints();
            calendar[i].points = getPoints();
            // updateLocalStorage();
            // calendar.push({
            //     points: getPoints(),
            // });
            localStorage.setItem('pointsPerDay', JSON.stringify(calendar));
            // letlocalStorage.setItem(pointsPerDay[i], JSON.stringify(pointsPerDay));
            // console.log(calendar[i])
            // console.log(calendar)

        }
    }
}

//Button actions
function buttonHandler() {
    updatePoints();
    setBarStyle();
    const list = document.querySelector('.todo__list');
    const items = list.querySelectorAll('.todo__list_item');

    for (const item of items) {
        if (item.classList.contains('checked')) {
            item.classList.remove('checked');
        }
    }
}

document.querySelector('.todo__list').addEventListener('click', selectItemHandler);
document.querySelector('.button').addEventListener('click', buttonHandler);