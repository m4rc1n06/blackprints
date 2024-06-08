document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
        });
    });
 /*
    const buyNowButton = document.getElementById('buy-now');
        buyNowButton.addEventListener('click', () => {
        window.location.href = 'https://allegrolokalnie.pl/oferta/cupholder-audi-a3-8l';
    });  */
//     function redirect() {
//     window.location.href = 'sciezka_do_strony_koszyka';
// }
});
function redirect1() {
    window.location.href = 'https://allegro.pl/oferta/cupholder-audi-a3-8l-15454256959';
}
function redirect2() {
    window.location.href = 'https://allegro.pl/oferta/cupholder-a3-8p-15456582541';
}
function redirect3() {
    window.location.href = 'https://allegro.pl/oferta/cupholder-a4-b5-lift-15457460261';
}
function redirect4() {
    window.location.href = 'https://allegro.pl/oferta/cupholder-octavia-1-15682394326';
}
function redirect5() {
    window.location.href = 'https://allegro.pl/oferta/cupholder-a3-8l-xl-15682335757';
}
