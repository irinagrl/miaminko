setBarStyle();

//progress bar style
function setBarStyle() {
    let width = JSON.parse(localStorage.getItem('width'));

    if (width > 1) {
        document.querySelector('.progress__bar').style.width = width + 'px';
        document.querySelector('.progress__bar').style.backgroundColor = '#1abc9c';
        updateHeaderTitle();
    }
}

function updateHeaderTitle() { //header title = amount to save - amount saved 
    let width = JSON.parse(localStorage.getItem('width'));
    const headerTitleToSave = document.querySelector('.header__title_toSave');
    const headerTitleSaved = document.querySelector('.header__title_saved');

    headerTitleToSave.textContent = amountToSave - width;
    headerTitleSaved.textContent = 0 + width;
    return;
}