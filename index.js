const starDivs = document.querySelectorAll('.stars');

starDivs.forEach(starDiv => {
    for (let i = 0; i < 5; i++) {
        let imagen = document.createElement('img');
        imagen.src = 'images/icon-star.svg';
        imagen.style.marginRight = '.25rem';
        imagen.style.marginLeft = '.25rem';
        starDiv.appendChild(imagen);
    }
})