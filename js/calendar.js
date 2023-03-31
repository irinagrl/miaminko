// const months = [
//     "Январь",
//     "Февраль",
//     "Март",
//     "Апрель",
//     "Май",
//     "Июнь",
//     "Июль",
//     "Август",
//     "Сентябрь",
//     "Октябрь",
//     "Ноябрь",
//     "Декабрь"
// ];

// const weekdays = ["Вск", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

// let dates = [];


// // for (let i = 1; i)
// // localStorage.setItem('days', JSON.stringify(pointsPerDay));

// let date = new Date();
// // console.log(date.getDate())

// // Main function that generates the calendar
// function generateCalendar() {

//     // Take a calendar and if it already exists remove it
//     const calendar = document.getElementById('calendar');
//     if (calendar) {
//         calendar.remove();
//     }

//     // Create the table that will store the dates
//     const table = document.createElement("table");
//     table.id = "calendar";
//     table.className = 'calendar__table';

//     // Create headers for the days of the week
//     const trHeader = document.createElement('tr');
//     trHeader.className = 'weeks';
//     weekdays.map(week => {
//         const th = document.createElement('th');
//         const w = document.createTextNode(week.substring());
//         th.appendChild(w);
//         trHeader.appendChild(th);
//     });

//     // Add headers to the table
//     table.appendChild(trHeader);

//     //Get the day of the week from the first day of the month
//     const weekDay = new Date(
//         date.getFullYear(),
//         date.getMonth(),
//         1
//     ).getDay();

//     //Get the last day of the month
//     const lastDay = new Date(
//         date.getFullYear(),
//         date.getMonth() + 1,
//         0
//     ).getDate();

//     let tr = document.createElement("tr");
//     let td = '';
//     let empty = '';
//     // let earned = '42';
//     let btn = document.createElement('button');
//     let week = 0;

//     // If the day of the week of the first day of the month is greater than 0(first day of the week);
//     while (week < weekDay) {
//         td = document.createElement("td");
//         empty = document.createTextNode(' ');
//         td.appendChild(empty);
//         tr.appendChild(td);
//         week++;
//     }

//     // It will run from the 1st to the last day of the month
//     for (let i = 1; i <= lastDay;) {

//         // As long as the day of the week is < 7, it will add columns to the week row
//         while (week < 7) {
//             td = document.createElement('td');
//             let text = document.createTextNode(i);
//             btn = document.createElement('button');
//             div = document.createElement('div');

//             btn.className = "btn-day";
//             div.className = "earned";

//             btn.addEventListener('click', function () {
//                 changeDate(this)
//             });
//             week++;

//             // Control for it to stop exactly on the last day
//             if (i <= lastDay) {
//                 i++;
//                 btn.appendChild(text);
//                 const d = new Date();
//                 let month = d.getMonth();
//                 dates.push(btn.textContent + (month + 1));
//                 console.log(dates)
//                 td.appendChild(btn)
//                 td.appendChild(div)


//             } else {
//                 text = document.createTextNode(' ');
//                 td.appendChild(text);
//             }
//             tr.appendChild(td);

//         }
//         // Add row to table
//         table.appendChild(tr);

//         // Creates a new line to be used
//         tr = document.createElement("tr");

//         // Reset the weekday counter
//         week = 0;
//     }
//     // Adds the table to the div it should belong to
//     const content = document.getElementById('table');
//     content.appendChild(table);
//     changeActive();
//     changeHeader(date);
//     // setEarnedPoints();
// }

// // Change the date through the form
// function setDate(form) {
//     let newDate = new Date(form.date.value);
//     date = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);
//     generateCalendar();
//     return false;
// }

// // Method Change the month and year at the top of the calendar
// function changeHeader(dateHeader) {
//     const month = document.getElementById("month-header");
//     if (month.childNodes[0]) {
//         month.removeChild(month.childNodes[0]);
//     }
//     const headerMonth = document.createElement("h1");
//     const textMonth = document.createTextNode(months[dateHeader.getMonth()] + " " + dateHeader.getFullYear());
//     headerMonth.appendChild(textMonth);
//     month.appendChild(headerMonth);
// }

// // Function to change the color of the button of the day that is active
// function changeActive() {
//     let btnList = document.querySelectorAll('button.active');
//     btnList.forEach(btn => {
//         btn.classList.remove('active');
//     });
//     btnList = document.getElementsByClassName('btn-day');
//     for (let i = 0; i < btnList.length; i++) {
//         const btn = btnList[i];
//         if (btn.textContent === (date.getDate()).toString()) {
//             btn.classList.add('active');
//         }
//     }
// }

// // Function that gets the current date
// function resetDate() {
//     date = new Date();
//     generateCalendar();
// }

// // Changes the date by the number of the button clicked

// function changeDate(button) {
//     let newDay = parseInt(button.textContent);
//     date = new Date(date.getFullYear(), date.getMonth(), newDay);
//     generateCalendar();
// }

// // Month and day forward and backward functions
// function nextMonth() {
//     date = new Date(date.getFullYear(), date.getMonth() + 1, 1);
//     generateCalendar(date);
// }

// function prevMonth() {
//     date = new Date(date.getFullYear(), date.getMonth() - 1, 1);
//     generateCalendar(date);
// }

// // Set earned points to the correct day 
// // function setEarnedPoints() {
// //     const days = document.querySelectorAll('.btn-day');
// //     const pointsEarned = document.querySelectorAll('.earned');
// //     const points = JSON.parse(localStorage.getItem('days'));

// //     for (let i = 0; i < pointsEarned.length; i++) {
// //         pointsEarned[i].textContent = Object.values(points[i]).toString();
// //         // console.log(pointsEarned[i].textContent)
// //         let key = i;
// //         console.log(points.key)

// //     }
// // }

// document.onload = generateCalendar(date);



// ////////////////////////////////////////////////////////////////////////////

// const daysTag = document.querySelector('.days');
// const currentDate = document.querySelector('.current-date');
// const prevNextIcon = document.querySelectorAll('.icons span');

// getting new date, current year and month
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

// const renderCalendar = () => {
//     let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
//         lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
//         lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
//         lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
//     let liTag = "";

//     for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
//         liTag += `<li class="day inactive">${lastDateofLastMonth - i + 1}</li>`;
//     }

//     for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
//         // adding active class to li if the current day, month, and year matched
//         let isToday = i === date.getDate() && currMonth === new Date().getMonth() &&
//             currYear === new Date().getFullYear() ? "active" : "";
//         liTag += `<li class="day">${i}</li>`;
//     }

//     for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
//         liTag += `<li class="day inactive">${i - lastDayofMonth + 1}</li>`
//     }
//     currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
//     daysTag.innerHTML = liTag;
// }
// renderCalendar();

// prevNextIcon.forEach(icon => { // getting prev and next icons
//     icon.addEventListener("click", () => { // adding click event on both icons
//         // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
//         currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

//         if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
//             // creating a new date of current year & month and pass it as date value
//             date = new Date(currYear, currMonth, new Date().getDate());
//             currYear = date.getFullYear(); // updating current year with new date year
//             currMonth = date.getMonth(); // updating current month with new date month
//         } else {
//             date = new Date(); // pass the current date as date value
//         }
//         renderCalendar(); // calling renderCalendar function
//     });
// });

//set array in localStorage with calendar info
// updateLocalStorage();

// const pointsPerDay = [];
const daysPerMnth = getDaysPerMonth();

function setLocalStorage() {
    const pointsPerDay = [];

    localStorage.setItem('pointsPerDay', JSON.stringify(pointsPerDay));
    return;
}

//get days in shown month
function getDaysPerMonth() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
};

function setDays(days) {
    calendar = JSON.parse(localStorage.getItem('pointsPerDay'));
    if (calendar.length < 1) {
        for (let i = 0; i < days; i++) {
            calendar.push({
                date: i + 1,
                points: 0,
            });

        }
        setLocalStorage();
        return calendar;

        // } {
        //     console.log('length > 1')

    }
};

setDays(daysPerMnth);

//create calendar
function render() {
    calendar = JSON.parse(localStorage.getItem('pointsPerDay'));

    for (let i = 0; i < calendar.length; i++) {
        createCard(calendar[i]);
    }
}

render();

function getItemElement(item) {
    const itemTemplate = document.querySelector('#calendar__template').content;
    const itemElement = itemTemplate.cloneNode(true);
    itemElement.querySelector('.day__date').innerText = item.date;
    itemElement.querySelector('.day__points').innerText = item.points;

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
        card.classList.remove('active');
    }

    selectedCard.classList.add('active');
}

document.querySelector('.days').addEventListener('click', selectedDayHandler);