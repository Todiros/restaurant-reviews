function widthResize() {
    let documentWidth = document.body.clientWidth;
    let headerEl = document.getElementById('header');
    let mainEl = document.getElementById('maincontent');
    let footerEl = document.getElementById('footer');
    let mapContainerEl = document.getElementById('map-container');
    let restaurantSectionEl = document.getElementById('restaurant-section');

    headerEl.style.width = documentWidth + 'px';
    mainEl.style.width = documentWidth + 'px';
    footerEl.style.width = documentWidth + 'px';
    mapContainerEl.style.width = documentWidth + 'px';
    restaurantSectionEl.style.width = documentWidth + 'px';
}

window.onload = () => {
    widthResize();
}

window.onresize = () => {
    widthResize();
}