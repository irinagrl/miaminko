////create calendar
render(calendarData);

function setCalendar() {
    let day = 0;
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(); // getting first day of month
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // getting last date of month
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); // getting last day of month
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month

    // days of previous mnth
    for (let i = firstDayofMonth; i > 1; i--) {
        day = lastDateofLastMonth - i + 2;
        calendarData.push(day);
    }

    // days of curr mnth
    for (let i = 0; i < lastDateofMonth; i++) {
        day = i + 1;
        calendarData.push(day);
    }

    // days of next mnth
    for (let i = lastDayofMonth; i < 7; i++) {
        day = i - lastDayofMonth + 1;
        calendarData.push(day);
    }

    return calendarData
}

function render(items) {
    setCalendar();
    for (let i = 0; i < items.length; i++) {
        createCard(items[i]);
    }
}

function getItemElement(item) {
    const itemTemplate = document.querySelector('#calendar__template').content;
    const itemElement = itemTemplate.cloneNode(true);
    itemElement.querySelector('.day').innerText = item;
    return itemElement;
}

function createCard(item) {
    const list = document.querySelector('.days');
    const itemElement = getItemElement(item);
    list.appendChild(itemElement);
}

//select a card with a click
function selectedDayHandler(evt) {
    const cards = document.querySelectorAll('.day');
    const selectedCard = evt.target.closest('.day');

    for (const card of cards) {
        if (card === selectedCard) {
            card.classList.toggle('checked');
        } else {
            if (card.classList.contains('checked')) {
                card.classList.remove('checked');
            }
        }
    }
}

document.querySelector('.days').addEventListener('click', selectedDayHandler);