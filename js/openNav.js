let menuIcon = document.getElementById('menuIcon');
let headerMenu = document.querySelector('.header_menu');

menuIcon.addEventListener('click', openMenu);

function openMenu() {
    return headerMenu.classList.toggle('openMenu');
}