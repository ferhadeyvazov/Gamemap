let menuIcon = document.getElementById('menuIcon');
let closeIcon = document.getElementById('nav_close');
let headerMenu = document.getElementById('nav_menu');

menuIcon.addEventListener('click', openMenu);
function openMenu() {
    return headerMenu.classList.add('openMenu');
}

closeIcon.addEventListener('click', closeMenu);
function closeMenu() {
    return headerMenu.classList.remove('openMenu');
};
