const amountToSave = 1000;

const calendarData = [];
const currentDate = document.querySelector('.month__title');

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

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

const todoItems = [{
    name: "Зубы (утро) 5",
    value: 5,
},
{
    name: "Зубы (вечер) 5",
    value: 5,
},
{
    name: "Съесть овощь 10",
    value: 10,
},
{
    name: "Съесть новое 10",
    value: 10,
},
{
    name: "Логопед 10",
    value: 10,
},
];