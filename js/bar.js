//progress bar style
function setBarStyle() {
    let width = getTotalPoints();
    if (width > 1) {
        document.querySelector('.progress__bar').style.width = width + 'px';
        document.querySelector('.progress__bar').style.backgroundColor = '#1abc9c';
    }
}

setBarStyle();

//set localStorage
// function setLocalStorage() {
//     if (localStorage.getItem('width') === null) {
//         window.localStorage.setItem('width', JSON.stringify(0));
//     } {
//         window.localStorage.getItem('width');
//     }
//     setBarStyle();
// }
// setLocalStorage();

//change bar width
// function updateLocalStorage() {
//     let width = Number(window.localStorage.getItem('width'));
//     width = width + getPoints();
//     window.localStorage.setItem('width', width);
// }

function getTotalPoints() {
    const calArr = JSON.parse(localStorage.getItem('pointsPerDay'));
    let total = 20;
    // console.log()

    for (let i = 0; i < calArr.length; i++) {
        total += calArr[0].points;
    }
    return total;
}

console.log(getTotalPoints())