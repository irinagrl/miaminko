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

function validate() {
    let validation = false;
    const items = document.querySelectorAll('.todo__list_item');
    const cards = document.querySelectorAll('.day');

    for (const card of cards) {
        if (card.classList.contains('checked')) {
            validation += true;
            break;
        }
    }

    for (const item of items) {
        if (item.classList.contains('checked')) {
            validation += true;
            break;
        }
    }

    return validation;

}

//Button actions
function buttonHandler() {
    const items = document.querySelectorAll('.todo__list_item');
    const cards = document.querySelectorAll('.day');

    if (validate() === 2) {
        document.querySelector('.todo__error').style.display = 'none';
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
    } else {
        document.querySelector('.todo__error').style.display = 'inline';
    }
}

document.querySelector('.todo__list').addEventListener('click', selectItemHandler);
document.querySelector('.todo__btn').addEventListener('click', buttonHandler);