function mapResize() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let mapEl = document.getElementById('map');

    if (screenWidth > 860) {
        mapEl.style.width = (screenWidth / 2) + 'px';
        mapEl.style.height = (innerHeight - 170) + 'px';
    } else {
        mapEl.style.width = '100%';
        mapEl.style.height = '100%';
    }
}

window.onload = () => {
    mapResize();
}

window.onresize = () => {
    mapResize();
}