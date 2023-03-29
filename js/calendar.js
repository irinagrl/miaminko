const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

const weekdays = ["Вск", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

const days = [{
        1: 0,
    },
    {
        2: 0,
    },
    {
        3: 0,
    },
    {
        4: 0,
    },
    {
        5: 0,
    },
    {
        6: 0,
    },
    {
        7: 0,
    },
    {
        8: 0,
    },
    {
        9: 0,
    },
    {
        10: 0,
    },
    {
        11: 0,
    },
    {
        12: 0,
    },
    {
        13: 0,
    },
    {
        14: 0,
    },
    {
        15: 0,
    },
    {
        16: 0,
    },
    {
        17: 0,
    },
    {
        18: 0,
    },
    {
        19: 0,
    },
    {
        20: 0,
    },
    {
        21: 0,
    },
    {
        22: 0,
    },
    {
        23: 0,
    },
    {
        24: 42,
    },
    {
        25: 0,
    },
    {
        26: 0,
    },
    {
        27: 0,
    },
    {
        28: 0,
    },
    {
        29: 0,
    },
    {
        30: 0,
    },
    {
        31: 0,
    },
]

localStorage.setItem('days', JSON.stringify(days));

let date = new Date();

// Main function that generates the calendar
function generateCalendar() {

    // Take a calendar and if it already exists remove it
    const calendar = document.getElementById('calendar');
    if (calendar) {
        calendar.remove();
    }

    // Create the table that will store the dates
    const table = document.createElement("table");
    table.id = "calendar";
    table.className = 'calendar__table';

    // Create headers for the days of the week
    const trHeader = document.createElement('tr');
    trHeader.className = 'weekends';
    weekdays.map(week => {
        const th = document.createElement('th');
        const w = document.createTextNode(week.substring());
        th.appendChild(w);
        trHeader.appendChild(th);
    });

    // Add headers to the table
    table.appendChild(trHeader);

    //Get the day of the week from the first day of the month
    const weekDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        1
    ).getDay();

    //Get the last day of the month
    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    let tr = document.createElement("tr");
    let td = '';
    let empty = '';
    let earned = '42';
    let btn = document.createElement('button');
    let week = 0;

    // If the day of the week of the first day of the month is greater than 0(first day of the week);
    while (week < weekDay) {
        td = document.createElement("td");
        empty = document.createTextNode(' ');
        td.appendChild(empty);
        tr.appendChild(td);
        week++;
    }

    // It will run from the 1st to the last day of the month
    for (let i = 1; i <= lastDay;) {
        // As long as the day of the week is < 7, it will add columns to the week row
        while (week < 7) {
            td = document.createElement('td');
            let text = document.createTextNode(i);
            btn = document.createElement('button');
            div = document.createElement('div');

            btn.className = "btn-day";
            div.className = "earned";

            btn.addEventListener('click', function () {
                changeDate(this)
            });
            week++;

            // Control for it to stop exactly on the last day
            if (i <= lastDay) {
                i++;
                btn.appendChild(text);
                td.appendChild(btn)
                td.appendChild(div)


            } else {
                text = document.createTextNode(' ');
                td.appendChild(text);
            }
            tr.appendChild(td);
        }
        // Add row to table
        table.appendChild(tr);

        // Creates a new line to be used
        tr = document.createElement("tr");

        // Reset the weekday counter
        week = 0;
    }
    // Adds the table to the div it should belong to
    const content = document.getElementById('table');
    content.appendChild(table);
    changeActive();
    changeHeader(date);
    setEarnedPoints();
}

// Change the date through the form
function setDate(form) {
    let newDate = new Date(form.date.value);
    date = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);
    generateCalendar();
    return false;
}

// Method Change the month and year at the top of the calendar
function changeHeader(dateHeader) {
    const month = document.getElementById("month-header");
    if (month.childNodes[0]) {
        month.removeChild(month.childNodes[0]);
    }
    const headerMonth = document.createElement("h1");
    const textMonth = document.createTextNode(months[dateHeader.getMonth()] + " " + dateHeader.getFullYear());
    headerMonth.appendChild(textMonth);
    month.appendChild(headerMonth);
}

// Function to change the color of the button of the day that is active
function changeActive() {
    let btnList = document.querySelectorAll('button.active');
    btnList.forEach(btn => {
        btn.classList.remove('active');
    });
    btnList = document.getElementsByClassName('btn-day');
    for (let i = 0; i < btnList.length; i++) {
        const btn = btnList[i];
        if (btn.textContent === (date.getDate()).toString()) {
            btn.classList.add('active');
        }
    }
}

// Function that gets the current date
function resetDate() {
    date = new Date();
    generateCalendar();
}

// Changes the date by the number of the button clicked
function changeDate(button) {
    let newDay = parseInt(button.textContent);
    date = new Date(date.getFullYear(), date.getMonth(), newDay);
    generateCalendar();
}

// Month and day forward and backward functions
function nextMonth() {
    date = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    generateCalendar(date);
}

function prevMonth() {
    date = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    generateCalendar(date);
}

// Set earned points to the correct day 
function setEarnedPoints() {
    const days = document.querySelectorAll('.btn-day');
    const pointsEarned = document.querySelectorAll('.earned');
    const points = JSON.parse(localStorage.getItem('days'));

    for (let i = 0; i < pointsEarned.length; i++) {
        pointsEarned[i].textContent = Object.values(points[i]).toString();
    }
}

document.onload = generateCalendar(date);