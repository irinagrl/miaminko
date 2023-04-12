//change colored bar width
function updateLocalStorage() {
    let width = JSON.parse(localStorage.getItem('width'));
    width += getSelectedPoints();
    localStorage.setItem('width', JSON.stringify(width));
}