// function setLocalStorage() {
//     const pointsPerDay = [];

//     localStorage.setItem('pointsPerDay', JSON.stringify(pointsPerDay));
//     return;
// }
// setLocalStorage();

// function getLocalStorage() {
//     JSON.parse(localStorage.getItem('pointsPerDay'));
// }

// function addToLocalStorage(days) {
//     var existing = localStorage.getItem(pointsPerDay);

//     // If no existing data, create an array
//     // Otherwise, convert the localStorage string to an array
//     existing = existing ? existing.split(',') : [];

//     // Add new data to localStorage Array
//     for (let i = 0; i < days; i++) {
//         existing.push({
//             date: i + 1,
//             points: 0,
//         });

//     }

//     // Save back to localStorage
//     localStorage.setItem(pointsPerDay, JSON.stringify(existing));
// }

// addToLocalStorage(daysPerMnth)
//change colored bar width
function updateLocalStorage() {
    let width = JSON.parse(localStorage.getItem('width'));
    width += getSelectedPoints();
    localStorage.setItem('width', JSON.stringify(width));
}