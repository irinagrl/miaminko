////create todo list

render(todoItems);

function render() {
    for (let i = 0; i < todoItems.length; i++) {
        createTodoCard(todoItems[i]);
    }
}

function getItemElement(item) {
    const itemTemplate = document.querySelector('#todo__template').content;
    const itemElement = itemTemplate.cloneNode(true);
    itemElement.querySelector('.todo__list_item').innerText = item.name;
    return itemElement;
}

function createTodoCard(item) {
    const list = document.querySelector('.todo__list');
    const itemElement = getItemElement(item);
    list.appendChild(itemElement);
}

//work with todo list
//calc total of selected todo items
function getSelectedPoints() {
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


//Button actions
function buttonHandler() {
    const items = document.querySelectorAll('.todo__list_item');
    const cards = document.querySelectorAll('.day');

    updateLocalStorage();
    setBarStyle();

    for (const card of cards) {
        if (card.classList.contains('checked')) {
            card.classList.remove('checked');
        }
    }

    for (const item of items) {
        if (item.classList.contains('checked')) {
            item.classList.remove('checked');
        }
    }
}

document.querySelector('.todo__list').addEventListener('click', selectItemHandler);
document.querySelector('.button').addEventListener('click', buttonHandler);